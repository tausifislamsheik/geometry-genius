// Triangle Section
document.getElementById('calculate-tri-btn').addEventListener('click', function(){
    const triangleBaseInput = document.getElementById('tri-base-input');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue)
    
    const triangleHeightInput = document.getElementById('tri-height-input');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);

    const area = 0.5 * base * height;
    
    const areaValue = document.getElementById('area-tri');
    areaValue.innerText = area;
})

// Rectangle Section 

function rectangleParentSection(){

    const width = rectangleInputById('rect-width-input');
    // console.log(width)
    const length = rectangleInputById('rect-length-input');
    // console.log(length)

    const area = width * length;
    console.log(area);

    areaCalculation('area-rect', area);

}

function rectangleInputById(inputId){
    const rectangleInput = document.getElementById(inputId);
    const rectangleValue = rectangleInput.value;
    const widthValue = parseFloat(rectangleValue);
    return widthValue;
}

function areaCalculation(areaId , area){
    const areaValue = document.getElementById(areaId);
    areaValue.innerText = area;
}
