const term = $('body').terminal({
    table() {
        this.echo(ascii_table([
            ['label', 'number', 'note'],
            ['one', 10, '[[;red;]This is red text]'],
            ['two', 20, '[[;blue;]This is blue text]']
        ], true));
    }
});

term.exec('table');

github('jcubic/jquery.terminal');