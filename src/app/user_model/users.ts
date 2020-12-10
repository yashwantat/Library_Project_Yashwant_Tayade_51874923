export class Users {
    id: string;
    Title: string;
    Author: string;
    Subject: string;
    Rack : string;
    Editon: string;
    Pages: string;
    YearOfPublication: string;

    constructor(id,Title,Author,Subject,Rack,Edition,Pages,YearOfPublication){
        this.id=id;
        this.Title=Title;
        this.Author=Author;
        this.Subject=Subject;
        this.Rack=Rack;
        this.Editon=Edition;
        this.Pages=Pages;
        this.YearOfPublication=YearOfPublication;
    }
}
