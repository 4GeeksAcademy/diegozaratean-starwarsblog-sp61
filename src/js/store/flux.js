const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            naves: [{
                    uid: "FIRST",
                    name: "white",
                    initial: "white"
                },
                {
                    uid: "SECOND",
                    name: "white2",
                    initial: "white"
                }
            ],
            message: 'inicial desde flux',
            misNaves: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            changeMessage: (titulo) => {
                console.log('changeMessage desde flux' + titulo)

                setStore({
                    message: titulo
                });

                const store = getStore();

                if (store.misNaves.includes(titulo)) {
                    console.log('ya esta')
                    setStore({
                        misNaves: store.misNaves.filter((nave) => nave != titulo)
                    });
                } else {
                    console.log('NO esta')
                    setStore({
                        misNaves: [...store.misNaves, titulo]
                    });
                }

            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                console.log('se cargto desde flux')
                fetch('https://swapi.tech/api/starships')
                    .then((response) => response.json())
                    .then((data) => setStore({
                        naves: data.results
                    }))

            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;