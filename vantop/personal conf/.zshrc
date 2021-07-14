# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
[[ -s `brew --prefix`/etc/autojump.sh ]] && . `brew --prefix`/etc/autojump.sh
export ZSH="/Users/vantopfedos/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(git)

source $ZSH/oh-my-zsh.sh

# YARN
alias yrl='yarn run local'
alias yi='yarn install'
alias yad='yarn add'
alias yr='yarn remove'
# NPM
alias ni='npm install'
alias nui='npm uninstall'
# GIT
alias gcl='git clone'
alias gc='git commit -m'
alias gd='git diff'
alias gm='git merge'
alias gco='git checkout'
alias gp='git push'
alias gpl='git pull'
alias gsh='git stash'
alias gad='git add'
alias gs='git status'
# IDE
alias vs='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'