Template.grid.helpers({
    rows: function(){
        var rows = [];
        _.range(12)
            .forEach(function(n){
                var row = [];
                _.range(12)
                    .forEach(function(n){
                        val = Math.random() > 0.9;
                        row.push(val);
                    });
                rows.push(row);
            });
        return  rows;
    }
});
