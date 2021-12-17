new Vue({
    el: '.phases',
    data : {
        phases : [
            {
                drawing: 'img/react-phases-render.png',
                text: 'Create JSX Elements to form virtual DOM',
                vdom: 'img/dom1.png',
                dom: 'img/dom1.png'
            },
            {
                drawing: 'img/react-phases-reconciliation.png',
                text: 'Compare nodes between virtual DOM and actual browser DOM',
                vdom: 'img/vdom1.png',
                dom: 'img/dom1.png'
            },
            {
                drawing: 'img/react-phases-commit.png',
                text: 'Update the actual DOM',
                vdom: 'img/vdom1.png',
                dom: 'img/vdom1.png'
            },
        ]
    },
})
