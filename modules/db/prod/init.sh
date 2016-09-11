#!/bin/sh

# Setup permissions for our "common" db user, defaults to full root access otherwise

REVOKE_ALL="REVOKE ALL PRIVILEGES ON *.* FROM '$MYSQL_USER'@'%';";
GRANT_NEEDED="GRANT INSERT, SELECT, UPDATE, DELETE ON db.* TO '$MYSQL_USER'@'%';";

mysql -u root -p$MYSQL_ROOT_PASSWORD -Bse "$REVOKE_ALL $GRANT_NEEDED"
mysql -u root -p$MYSQL_ROOT_PASSWORD -Bse "FLUSH PRIVILEGES;"