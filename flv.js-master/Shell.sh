DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
pushd "$DIR/../global"
d=$(pwd)
echo $d/Node
export PATH=$PATH:$d/Node/bin
popd
