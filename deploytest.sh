#!/usr/bin/env sh


# abort on errors
set -eu

exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>deployResult.txt 2>&1

PAGE_BRANCH="gh-pages"
# abort on errors
set -e

# build
yarn docs:build

# Setup and variables
PAGES_BRANCH="gh-pages"
_no_branch=false
_backup_dir="$(mktemp -d)"

# navigate into the build output directory
cd docs/.vuepress/dist

# GIT checks and initialize repository
# init() {
#   if [[ -z ${GITHUB_ACTION+x} ]]; then
#     echo "ERROR: This script is not allowed to run outside of GitHub Action."
#     exit -1
#   fi

  if [[ -z $(git branch -av | grep "$PAGES_BRANCH") ]]; then
    echo 'Deployable Branch not found. Creating a new branch...'
    _no_branch=true
    git checkout -b "$PAGES_BRANCH"
  else
    echo 'Branch exists! Switching to ' $PAGES_BRANCH 
    git checkout "$PAGES_BRANCH"
  fi
#}

#backup() {
  mv ./* "$_backup_dir"
  echo 'moving ./* done'
  chmod 777 ../../../.git
  echo 'chmod done'
  mv  ../../../.git/* "$_backup_dir"
  echo 'git dir copied successfully - done'
  

  # When adding custom domain from Github website,
  # the CANME only exist on `gh-pages` branch
  # if [[ -f CNAME ]]; then
  #  mv CNAME "$_backup_dir"
  # fi
#}

# Flush directory - 
#flush() {
#   rm -rf ./*
#   rm -rf .[^.] .??*

#   shopt -s dotglob nullglob
#   mv "$_backup_dir"/* .

#}


#deploy() {
    echo 'checking git config'
    git config --global user.name "alavanQA"
    git config --global user.email "alavanqa@gmail.com"

    echo 'git config DONE'
    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME
    git checkout $PAGE_BRANCH
    git add -A
    echo 'git commit triggered'
    git commit -m 'Automatic deployment via deploy shell script'
    echo 'git commit done'

    if $_no_branch; then
        git push -u origin "$PAGES_BRANCH"
    else
        git push -f
    fi

    cd -
#}


# main() {
#     init
#     echo 'init done'
#     backup
#     echo 'backup done'
#     flush
#     echo 'flush done'
#     deploy
#     echo 'nunca vai rodar'
# }
