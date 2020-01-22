import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    
    transform(users, value){
      //  if (value === undefined) { return users; }
     
        return users.filter(user => {
           // console.log(user.name.toLocaleUpperCase( ))
            let userUpper = user.name.toLocaleUpperCase( )
            return userUpper.includes(value.toLocaleUpperCase( ))
        })
    }

}