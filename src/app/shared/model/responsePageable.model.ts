export class ResponsePageable{
    content: any[] = [];
    first: boolean = false;
    last: boolean = false;
    number!: number;
    numberOfElements!: number;
    pageable: any[] = [];
    size!: number;
    sort!: number;
    totalElements!: number;
    totalPages!: number;
}