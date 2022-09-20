# Sudoku
#### CS3099 Software Engineering Project
###### Team Members: Finn, Tianchen, Jason, Benedict, & Jack

My Name is: 
I'm owning these parts of the project:

>Networking: <"Name">
>UI: Jack
>Logic: <"Name">
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

```
$ brew install gh
$ gh auth login
```

follow this sequence of commands:
:   ? GitHub.com
    ? HTTPS
    ? Yes
    ? Login with a web browser
    copy your one-time code:
    Hit Enter
    Paste
    Authorize
    ...

    Have Jack add you to the repo
    Tick your checkboxes

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
$ git fetch upstream
$ git rebase upstream/trunk
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
$ git push
```

Pat yourself on the back, good work! Now lets clean up the file and repeat for the next guy!
