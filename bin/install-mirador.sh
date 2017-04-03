#!/bin/sh
# Convenience wrapper for rake task mirador:install

SRC_DIR=$1
echo "SRC_DIR=${SRC_DIR}"
if [ "$SRC_DIR" = "" ]; then
  SRC_DIR=~/home/workspace/git/iiif/yale-mirador/dist
fi

rake mirador:install[${SRC_DIR}]
