
// const domain='http://172.30.1.38:3000/'
const domain='https://codepoker.w8385.dev/'

const getPokerList = async () => (await fetch(domain+'poker')).json();
const getPokerResult = async (id) => {
    console.log('fetching', id)
    if(id=='recent') return (await (await fetch(domain+'poker/'+id)).json())['result'];
    else return (await (await fetch(domain+'poker/'+id)).json())['result'];
}

export {getPokerList, getPokerResult}
