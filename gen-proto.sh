#!/bin/bash
case "$1" in
release)
echo "build $1..."
# 生成js 为了节省空间 去掉了许多东西
pbjs -t static-module -w commonjs -o ./assets/script/tools/pbProto/bundle.js $(find ../../proto -name "*.proto" -print)  --keep-case --no-create --no-verify --no-convert --no-delimited --no-beautify --no-comments
;;
*)
echo "build $1..."
# 生成js 为了节省空间 去掉了许多东西
#$(find ../../../proto -name "*.proto" | awk -F\, '{print $1 " \\"}')
#pbjs -t static-module -w commonjs -o ./src/pbproto/bundle.js $(find ../../../proto -name "*.proto" | awk -F\, '{print $1 " \\\\"}') --keep-case
pbjs -t static-module -w commonjs -o ./assets/script/tools/pbProto/bundle.js \
../../proto/base.proto \
../../proto/farm/applet.proto \
../../proto/farm/building.proto \
../../proto/farm/common.proto \
../../proto/message/message.proto \
../../proto/message/room/room.proto \
../../proto/message/error/error.proto \
../../proto/oauth2/oauth2.proto \
../../proto/profile/profile.proto \
--keep-case --no-create --no-verify --no-delimited --no-beautify
;;
esac
# 生成 .d.ts
pbts -o ./assets/script/tools/pbProto/bundle.d.ts ./assets/script/tools/pbProto/bundle.js
# pbjs -t static-module -w commonjs ../../proto/message/*.proto | pbts -o ./src/pbproto/bundle.d.ts -
# 修正bundle.d.ts文件
sed -i '' 's/\"protobufjs\"/\"..\/protobuf\/protobuf.min\"/g' ./assets/script/tools/pbProto/bundle.d.ts
# 修正bundle.d.ts文件
sed -i '' '1i\
import Long from \"..\/long\/Long.js\";\
' ./assets/script/tools/pbProto/bundle.d.ts
# 修正bundle.js文件
sed -i '' 's/require(\"protobufjs\/minimal\")/protobuf/g' ./assets/script/tools/pbProto/bundle.js