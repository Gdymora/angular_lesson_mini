import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
   
    size = 8; // default number of users
    constructor(private http: HttpClient){// инжектируем специальный класс, отвечающий за работу с AJAX запросами

    }
        getUsers(){
            return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb')
            .pipe(map(
                        function(response:any) {
                            return response.results;
                        }
                    )
            ).pipe(
                map(users => {
                    return users.map(u => 
                        {
                            return {name: u.name.title + ' ' + u.name.first + '  ' + u.name.last,
                            image: u.picture.large,
                            geo: 'City ' + u.location.city + ' ' + 'State ' + u.location.state + ' ' + 'Street ' + u.location.street.name}
                        }
                        )}
                    
                   )
            );
        }
// http объект возвращает http rxjs стрим, на который нужно подписаться
  // парсим ответ с помощью map

    setSize(size){
        //console.log(size)
        this.size = size;
    }    
}