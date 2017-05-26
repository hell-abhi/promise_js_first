function server1(id){
	return new Promise(function(resolve, reject){
		setTimeout(() => resolve(1), 1000)
	})
}
 
function server2(id){
	return new Promise(function(resolve, reject){
		setTimeout(() => resolve(2), 1000)
	})
}
 
function server3(id){
	return new Promise(function(resolve, reject){
		setTimeout(() => resolve(3), 1000)
	})
}
 
var finalData = []
server1(2)
.then(function(data1){
	finalData.push(data1)
	console.log('server1: ', data1)
	return server2()
})
.then(function(data2){
	finalData.push(data2)
	console.log('server2: ', data2)
	return server3()
})
.then(function(data3){
	console.log('server3: ', data3)
	finalData.push(data3)
	console.log('finalData: ', finalData)
})
