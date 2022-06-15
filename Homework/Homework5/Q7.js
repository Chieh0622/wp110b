function transpose(array)
{
    var arr = Array.from(Array(array[0].length), () => new Array(array.length));
    for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < array[0].length; j++)
        {
            arr[j][i] = array[i][j];
        }
    }

    return arr;
}

console.log(transpose([[ 3, 2, 1 ], [ 1, 2, 3 ]]));

//[ [ 3, 1 ], [ 2, 2 ], [ 1, 3 ] ]
