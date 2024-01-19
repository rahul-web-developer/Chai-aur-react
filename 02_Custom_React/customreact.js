
function customRender(reactElement,root){


//     const createdomelement = document.createElement(reactElement.type)
//     const img = document.createElement('img');

// img.src = reactElement.image

//     createdomelement.innerHTML = reactElement.children


//     createdomelement.setAttribute('href', reactElement.props.href)

//     createdomelement.setAttribute('target', reactElement.props.target)




// root.appendChild(createdomelement)

// root.appendChild(img)


const domelement  = document.createElement(reactElement.type)


domelement.innerHTML = reactElement.children



for (const prop in reactElement.props) {
    if (prop  === 'children') continue; 


    domelement.setAttribute(prop,reactElement.props[prop])

}
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',

    },
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",

    children: 'click me to visit google',
}





const root = document.querySelector('#root');

console.log(root)


customRender(reactElement,root)


