const data= [
    {
        'item':'orange',
	'value':100,
         },
        {
            'item':'grapes',
	    'value':60 },
            {
                'item':'apples',
		'value':140 },
    ];
    

   const totalValue = data.reduce((accumulator,currentValue) => {
    return accumulator + currentValue.value;
},0);


    console.log(totalValue);
    

