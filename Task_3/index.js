 const fs=require('node:fs')


// //Task_1 "Create and Write Data to a File

const fd=fs.openSync('data.txt','w')
fs.writeSync(fd,"Hello, this is the first line.\n")
fs.closeSync(fd)
const fdAppend=fs.openSync('data.txt','a')
fs.writeSync(fdAppend,"Hello,this is the second line.\n")
fs.close(fdAppend)

// // //Task_2 :Read File Content into a Buffer

const fr=fs.openSync('data.txt','r')
const buffer=Buffer.alloc(64)
fs.readSync(fr,buffer)
console.log("Buffer without encoding: \n",buffer)
console.log("Result of encoding :\n",buffer.toString('utf-8'))
fs.close(fr)


// // //Task_3 : Copy File Content Byte-by-Byte

const sourceFile=fs.openSync('data.txt','r')
const destinationFile=fs.openSync('copy.txt','w')
const buffer2=Buffer.alloc(16)
let bites
while ((bites=fs.readSync(sourceFile,buffer2))>0){
    fs.writeSync(destinationFile,buffer2,0,bites)
}
fs.close(sourceFile)
fs.close(destinationFile)


// //Task_4 : Implement a Simple File Cursor

const fw=fs.openSync('example.txt','w+')
fs.writeSync(fw,"0123456789")
fs.writeSync(fw, 'AB', 5, 'utf-8');
const buffer3=Buffer.alloc(16)
fs.readSync(fw,buffer3,0,buffer3.length,0)
console.log("Updated text from example.txt: ",buffer3.toString('utf-8'))
fs.closeSync(fw)

// //Task_5 :  File Length and Seek

const file=fs.openSync('data.txt','r')
const stats=fs.fstatSync(file)
const length=stats.size
console.log("file's length of bytes:",length)
const middle=Math.floor(length/2)
const buffer4=Buffer.alloc(10)
fs.readSync(file,buffer4,0,10,middle)
console.log("next 10 bytes from middle: ",buffer4.toString("utf-8"))
fs.closeSync(file)

// //Task_6 : Merge Multiple Files

fs.writeFileSync('file1.txt', "Content of the first file.\n");
fs.writeFileSync('file2.txt', "Content of the second file.\n");
const merge = 'merge.txt';
const buffer5 = fs.readFileSync('file1.txt');
const buffer6 = fs.readFileSync('file2.txt');
const newbuffer = Buffer.concat([buffer5, buffer6]);
fs.writeFileSync(merge, newbuffer);
console.log('SMerged file1.txt and file2.txt into merge.txt.');

//Task_7 :  Insert Content into the Middle of a File

const path = './message.txt'
if (!fs.existsSync(path)) {
    fs.writeFileSync(path, 'Hello World!');
}
const fo = fs.openSync(path, 'r+');
const buffer7 = fs.readFileSync(fo);
const content = buffer7.toString();
const position = content.indexOf('Hello') + 5;
const modifiedContent = content.slice(0, position) + ' Awesome' + content.slice(position);
const newBuffer = Buffer.from(modifiedContent, 'utf-8');
fs.writeFileSync(fo, newBuffer);
console.log('Updated content:', newBuffer.toString());
fs.closeSync(fo);
