#!/usr/bin/env sh

# Abort on errors
set -eu

# Logger
exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>deploy.log 2>&1

# Setup variables
CLONED_REPO=alavanqa.github.io

echo '=== > Deploying alavanQA Website'

mkdir publish && cd publish
git clone https://github.com/alavanQA/alavanqa.github.io.git

echo '=== > Step 1/7 - Checking out origin/source in Git'
cd $CLONED_REPO

echo '=== > Step 2/7 - Shuffling files and copying website content'
shopt -s extglob
rm -rf *
cp -r ../../docs/.vuepress/dist/* .
shopt -u extglob

echo '=== > Step 3/7 - Git - Commiting changes'
git add .
git commit -m "Automatic deployment via shell script"
echo '=== > Step 4/7 - Git - Pushing to alavanQA repository'
git push --force
echo '=== > Step 5/7 - Hooray! Website published successfully.'

cd ../../ && rm -Rf publish

echo '===> Step 6/7 - Git - fetching and rebasing repo...'
git fetch upstream && git rebase upstream/source && git push
git checkout main && git fetch upstream && git rebase upstream/source && git push
git checkout source

echo '===> Step 7/7 - SUCCESS! Repository is up-to-date and ready for more!'

cd - 