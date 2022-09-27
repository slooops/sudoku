# Sudoku
#### CS3099 Software Engineering Project
###### Team Members: Finn, Tianchen, Jason, Benedict, & Jack

I'm owning these parts of the project:

>Networking: <"Name">
>UI: Jack
>Logic: Tianchen
>Backend: <"Name">

---
## Getting Started

- [ ] Check this box
- [ ] Fill out name and section
- [ ] Commit the change
- [ ] Push to Github Repository

#### A Bash Guide Intro to Git
###### Set your username and email


```
git config --global user.name <name>
git config --global user.email <email>
```

###### Install and Login to Github

###### Mac
```
$ brew install gh
```
###### PC
```
$ choco install gh
```

Follow this sequence of commands:
```
$ gh auth login
...
? GitHub.com
? HTTPS
? Yes
? Login with a web browser
  copy your one-time code:
  Hit Enter
  Paste
  Authorize
```
Wait ...

>Have Jack add you to the repo
>Tick your checkboxes

###### Clone the repo
```
$ gh repo clone https://github.com/slooops/sudoku.git
```

###### Make your first pull request
```
$ git checkout -b firstBranch
$ git commit -am "this is my first commit"
$ git push -u origin firstBranch

Open the link created to visit the repo and review your first pull request!
```
---
#### A Guide to Future Updates
Update your local branch *BEFORE* you start working (so as to avoid conflicts with existing work)
```
$ git fetch origin
$ git rebase origin/main
```
###### Make a new branch to work on

```
$ git checkout -b <branchName>
$ git push -f
```
###### Make all desired changes
*And then - please to god - check your work with these commands before you commit*
```
$ git diff
$ q
$ git status
```

###### Commit your work!
```
$ git commit -am "describe what you changed"
$ git push -u origin <brandName>
```

Pat yourself on the back, good work!

In the future, please do not merge your own pull requests. To work collaboratively, at least one team member should review new work before committing to our shared codebase.