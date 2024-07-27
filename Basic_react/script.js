function createElement(rootElement,randomElement){
    // const ele = document.createElement(randomElement.type)
    // ele.setAttribute('href',randomElement.props.href)
    // ele.setAttribute('target',randomElement.props.target)
    
    // ele.innerHTML = randomElement.children
    // rootElement.appendChild(ele)


    //looping

    const ele = document.createElement(randomElement.type)
    for (const item in randomElement.props) {
        ele.setAttribute(item,randomElement.props[item])
        }
        ele.innerHTML = randomElement.children
        rootElement.appendChild(ele)
    }
   

const rootElement = document.querySelector('#root')
const randomElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "click here to visit !"
}


createElement(rootElement,randomElement)