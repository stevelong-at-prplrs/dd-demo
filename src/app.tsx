import * as React from "react";

export const App = () => {

    const dragWrapper = React.useRef();
    const [wrapperCoords, setWrapperCoords] = React.useState([undefined, undefined]);
    const [dragStartCoords, setDragStartCoords] = React.useState([0, 0]);
    
    const allowDrop = (e) => e.preventDefault();
    
    const setDragStartPos = (e) => {
        setDragStartCoords([e.clientX - dragWrapper.current.offsetLeft, e.clientY - dragWrapper.current.offsetTop]);
    };

    const dropHandler = (e) => { // disallow negative / offscreen placement for top and left window edges. Wrapper can overflow in the horizontal right or veritical left directions only.
        setWrapperCoords([Math.max(0, e.clientX - dragStartCoords[0]),Math.max(0, e.clientY - dragStartCoords[1])]);
    };

    return (
        <section className="drag-container" onDrop={dropHandler} onDragOver={allowDrop}>
            <h2>Example of DragWrapper used inside Drag Container, both HOCs for containing generic components</h2>
            <div className="drag-wrapper" ref={dragWrapper} draggable="true" onDragStart={setDragStartPos} style={{ left: wrapperCoords[0] ?? 100, top: wrapperCoords[1] ?? 100 }}>
                <p>Draggable element (This is an example, but the component should be a wrapper or HOC for wrapping a generic component)</p>
            </div>
        </section>
    )
};
