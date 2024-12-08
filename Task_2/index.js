const {PathAnalyzer,PathNormalizer,Timer,UserActionTracker}=require("./task")


//Task 1
const analyzer=new PathAnalyzer()
const filePath="/home/user/documents/report.pdf"
console.log("BaseName is ",analyzer.getBasename(filePath))
console.log("DirName is ",analyzer.getDirname(filePath))
console.log("Extension is ",analyzer.getExtension(filePath))
console.log("Is Absolute Path : ",analyzer.isAbsolutePath(filePath))


//Task 2
const normalizer=new PathNormalizer()
console.log("Normalize path: ",normalizer.normalizPath("./user/../user/documents//file.txt"))
console.log("Join Path: ", normalizer.joinPath("/home", "user", "documents", "file.txt"))

//Task3
const timer=new Timer(5)
timer.on("start",()=>{
    console.log("Timer started")
})
timer.on("tick",(timeLeft)=>{
    console.log(`Time left ${timeLeft} seconds`)
})
timer.on("end",()=>{
    console.log("Timer ended")
})
timer.start()

//Task 4

const tracker = new UserActionTracker();
tracker.on('actionLogged', (action) => {
  console.log(`actionLogged: ${action}`);
});
tracker.on('maxActions', (message) => {
  console.log(`maxActions: ${message} actions logged.`);
});
tracker.logAction('login');
tracker.logAction('viewProfile');
tracker.logAction('logout');
tracker.logAction('login');
tracker.logAction('updateProfile');
tracker.logAction('logout');
