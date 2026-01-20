\# Unix/Linux Commands Notes



\*\*Repo:\*\* Backend-Dev  

\*\*Branch:\*\* unix-commands-git-github  

\*\*File:\*\* unix-commands.md  

\*\*Author:\*\* Akash Singh



---



\## Table of Contents

1\. Terminal Basics + Shortcuts  

2\. Navigation Commands  

3\. File \& Folder Commands  

4\. View \& Read Files

5\. File Permissions

6\. Text Processing Commands





---



\# 1) Terminal Basics + Shortcuts



```bash

clear                  # clear terminal screen

history                # show command history

!!                     # run last command

exit                   # exit terminal

2) Navigation commond

pwd                    # current path

ls                     # list files/folders

ls -l                  # long format

ls -a                  # show hidden files

ls -la                 # long + hidden

cd foldername          # move into folder

cd ..                  # move back one folder

cd ../..               # move back two folders

cd ~                   # go to home directory

cd /                   # go to root directory



3\) File \& Folder Commonds

3.1)  Create

touch file.txt

touch a.txt b.txt c.txt



mkdir folder

mkdir folder1 folder2

mkdir -p parent/child/grandchild



3.2) Copy


cp a.txt b.txt

cp file.txt folder/

cp -r folderA folderB


3.3) Move \& Rename


mv a.txt folder/

mv oldname.txt newname.txt

mv folderA folderB


3.4) Delete


rm file.txt

rm -i file.txt            # confirm before delete

rm -r foldername          # delete folder recursively

rm -rf foldername         # force delete (DANGER)

rmdir emptyFolder         # remove empty folder

4). View and Read file


cat file.txt              # print file content

less file.txt             # scroll view

more file.txt             # page-by-page view



head file.txt             # first 10 lines

head -n 20 file.txt       # first 20 lines



tail file.txt             # last 10 lines

tail -n 20 file.txt       # last 20 lines

tail -f app.log           # live log (real-time)



5). File Permissions



ls -l # View permissions

chmod 755 filename # Change permissions (rwxr-xr-x)

chmod +x filename # Add execute permission

chmod -w filename # Remove write permission

chown user:group file # Change ownership



6). Text Processing Commands



grep "pattern" filename # Search for pattern in file

grep -r "pattern" directory # Recursive search

grep -i "pattern" filename # Case-insensitive search

find /path -name "\*.txt" # Find files by name



sed 's/old/new/g' file # Replace text in file

awk '{print $1}' file # Print first column

sort filename # Sort lines

uniq filename # Remove duplicate lines



