const path=require('node:path')
const EventEmitter=require("node:events")

//Task 1

class PathAnalyzer{
    getBasename(filePath){
        return path.basename(filePath)
    }
    getDirname(filePath){
        return path.dirname(filePath)
    }
    getExtension(filePath){
        return path.extname(filePath)
    }
    isAbsolutePath(filePath){
        return path.isAbsolute(filePath)
    }
}

//Task 2

class PathNormalizer{
    normalizPath(filePath){
        return path.normalize(filePath)
    }
    joinPath(...filePath){
        return path.join(...filePath)
    }
}

//Task 3
class Timer extends EventEmitter{
    constructor(duration){
        super()
        this.duration=duration
    }
    start(){
        this.emit("start")
        this.countdown(this.duration)
    }
    countdown(timeLeft){
        if(timeLeft<0){
            this.emit("end","timer ended")
            return
        }
        this.emit("tick",timeLeft)
        const start=Date.now()
        while(Date.now()-start<1000){}
        this.countdown(timeLeft-1)
    }
}

//Task 4

class UserActionTracker extends EventEmitter {
    constructor() {
      super()
      this.actions = []
    }
    logAction(action) {
      this.actions.push(action)
      this.emit('actionLogged', action)
      if (this.actions.length > 5) {
        this.emit('maxActions', this.actions.length)
      }
    }
    getActionCount() {
      return this.actions.length
    }
  }
module.exports={PathAnalyzer,PathNormalizer,Timer,UserActionTracker}