#!/usr/bin/env sh

PAGE_BRANCH="gh-pages"
# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git config --global user.name "alavanQA"
git config --global user.email "alavanqa@gmail.com"

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git checkout -b $PAGE_BRANCH
git add -A
git commit -m 'Automatic deployment via deploy shell script'

# if you are deploying to https://<USERNAME>.github.io
git push -u origin $PAGE_BRANCH

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:alavanqa/alavanqa.github.io.git main:gh-pages
cd -