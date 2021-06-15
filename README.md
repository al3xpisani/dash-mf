# dash-mf
MicroFrontEnd with React




Create git repo
 git status
 git init
 git add .
 git commit –m "initial comment"
 git remote add origin https://github.com/al3xpisani/dash-MF.git
 git push origin master







Remove HtmlWebPackPlugin. We added it to webpack.common because this tag needs to import index.html to production.






Understanding GitHub Events
GitHub has some events like "Push Code" : Everytime you pushed some code to git, Git raises some action related to that event.





CREATING WORKFLOW ON GIT

Actions -> Setup WorkFlow

Or 

Built in editor


USING BUILT IN EDITOR YAM file

On root directory of your project

Create .github folder and inside workflows
Create inside container.yml (GitHub will assume this is the current workflow and will do the actions

On the github make sure to create this file like example below:



In your root project you will create this container.yml



YAM content: (In this case for Heroku)



You need to setup workflow rights on git to avoid the error above. Generate a new token and be authenticated with it.


 Main.yml project file





![image](https://user-images.githubusercontent.com/14879580/122047642-c0f5ac80-cdb6-11eb-843d-524327fc191c.png)


 

 

 
