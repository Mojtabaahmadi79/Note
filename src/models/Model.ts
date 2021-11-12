export class Model {
    user;
    items;

    constructor() {
        this.user = 'Angular';
        this.items = [
            { action: 'Test One', done: false },
            { action: 'Test Two', done: false },
            { action: 'Test Three', done: true },
            { action: 'Test Four', done: false }
        ];
    }
}

export class ToDoItem {
    action;
    done;

    constructor(action: any, done: any) {
        this.action = action;
        this.done = done;
    }
}