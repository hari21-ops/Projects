#!/bin/bash

# ==============================
# Exporter Installation Script
# ==============================
# Copies exporter packages from source server to a destination server,
# extracts them into /home/monuser/<exporter_name>/,
# and sets up systemd services for each.

# --- Variables ---
SOURCE_DIR="/data/exporters"
DESTINATION_DIR="/home/monuser"
USER="monuser"
DESTINATION_HOST=$1   # Pass destination host as argument

EXPORTERS=("node_exporter" "mysqld_exporter" "nginx_exporter")

# --- Sanity checks ---
if [ -z "$DESTINATION_HOST" ]; then
    echo "Usage: $0 <destination_server>"
    exit 1
fi

echo "==== Exporter Installer ===="
echo "Source: $SOURCE_DIR"
echo "Destination Host: $DESTINATION_HOST"
echo "Destination Dir: $DESTINATION_DIR"
echo "User: $USER"
echo "============================"
sleep 1

# --- Step 1: Copy exporter packages ---
for exporter in "${EXPORTERS[@]}"; do
    PKG_FILE="${exporter}.tar.gz"
    echo "[INFO] Copying $PKG_FILE to ${DESTINATION_HOST}:${DESTINATION_DIR}/"
    scp "${SOURCE_DIR}/${PKG_FILE}" "${USER}@${DESTINATION_HOST}:${DESTINATION_DIR}/" || {
        echo "[ERROR] Failed to copy ${PKG_FILE}"
        exit 1
    }
done

# --- Step 2: SSH into destination and install ---
ssh ${USER}@${DESTINATION_HOST} bash -s <<'EOF'
set -e

# Variables (injected manually for remote execution)
DESTINATION_DIR="/home/monuser"
USER="monuser"
EXPORTERS=("node_exporter" "mysqld_exporter" "nginx_exporter")

echo "[INFO] Starting remote installation..."

for exporter in "\${EXPORTERS[@]}"; do
    PKG_FILE="\${DESTINATION_DIR}/\${exporter}.tar.gz"
    INSTALL_DIR="\${DESTINATION_DIR}/\${exporter}"

    echo "[INFO] Installing \${exporter}..."

    # Create destination folder
    mkdir -p "\${INSTALL_DIR}"
    cd "\${INSTALL_DIR}"

    # Extract and clean up
    tar -xzf "\${PKG_FILE}" --strip-components=1
    rm -f "\${PKG_FILE}"

    # Ensure permissions
    chmod +x "\${INSTALL_DIR}/\${exporter}"

echo "✅ Exporter installation completed on ${DESTINATION_HOST}."
