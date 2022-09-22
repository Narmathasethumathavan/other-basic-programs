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
    const string=data.map((fruit)=>{
        return fruit.item
    });
 console.log(string);