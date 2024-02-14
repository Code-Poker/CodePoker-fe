
// const domain='http://172.30.1.38:3000/'
const domain='http://terraprisma.site/'

const getPokerList = async () => (await fetch(domain+'poker')).json();
const getPokerResult = async (id) => {
    console.log('fetching', id)
    if(id=='recent') return (await (await fetch(domain+'poker/'+id)).json())['result'];
    else return (await (await fetch(domain+'poker/'+id+'/calc')).json())['result'];
}

export {getPokerList, getPokerResult}