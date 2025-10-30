# Create systemd service
    SERVICE_FILE="/etc/systemd/system/\${exporter}.service"
    echo "[INFO] Creating systemd service: \${SERVICE_FILE}"
    sudo bash -c "cat > \${SERVICE_FILE}" <<SERVICE_EOF
[Unit]
Description=\${exporter} service
After=network.target

[Service]
User=\${USER}
ExecStart=\${INSTALL_DIR}/\${exporter}
WorkingDirectory=\${INSTALL_DIR}
Restart=always

[Install]
WantedBy=multi-user.target
SERVICE_EOF

    # Enable and start service
    sudo systemctl daemon-reload
    sudo systemctl enable "\${exporter}" --now
    echo "[SUCCESS] \${exporter} installed and running."
done

echo "[DONE] All exporters installed successfully."
EOF
