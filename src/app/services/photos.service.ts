import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PhotosService {
  private jsonPhotos : string = '{"photos":[ ' +
    '{"name":"Nature","size":"89454","modified":"1475245231006","url":"https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg"}, ' +
    '{"name":"Fields","size":"91777","modified":"1472245221006","url":"http://www.worddive.com/blog/wp-content/uploads/2014/06/nature-and-environment-course.jpg"}, ' +
    '{"name":"Forest","size":"64233","modified":"1473245261006","url":"http://www.nature.org/cs/groups/webcontent/@web/@washington/documents/media/forests-for-our-futurecentr-15.jpg"}, ' +
    '{"name":"Nature","size":"78456","modified":"1474245161006","url":"https://www.discovernorthernireland.com/image.aspx?ImageID=42385&Width=600&Height=400&Bg="}, ' +
    '{"name":"River","size":"98121","modified":"1471245221006","url":"http://www.samoaobserver.ws/images/cache/600x400/crop/images%7Ccms-image-000009332.jpg"}, ' +
    '{"name":"Bridge","size":"89443","modified":"1474245261006","url":"http://www.nature.com/nature/journal/v531/n7594_supp/images/531S56a-i1.jpg"}, ' +
    '{"name":"Mountains","size":"95438","modified":"1472243261006","url":"http://www.wall321.com/thumbnails/detail/20131030/mountains%20clouds%20landscapes%20nature%20trees%20grass%20skyscapes_www.wall321.com_57.jpg"}, ' +
    '{"name":"Deer","size":"78978","modified":"1476245161006","url":"http://121clicks.com/wp-content/uploads/2011/09/naturephotography48.jpg"}, ' +
    '{"name":"Waterfall","size":"78978","modified":"1472242261006","url":"http://www.phuquocislandguide.com/wp-content/uploads/da-ngon-waterfall-phu-quoc.jpg"}, ' +
    '{"name":"Nice","size":"78978","modified":"1473245161006","url":"http://digital-photography-school.com/wp-content/uploads/2014/09/winter-landscape.jpg"}, ' +
    '{"name":"Sky","size":"78978","modified":"1475245221006","url":"http://www.nature.com/nature/journal/v529/n7584/images/529022a-i1.jpg"}, ' +
    '{"name":"Trees","size":"78978","modified":"1476235261006","url":"http://1.bp.blogspot.com/-hBfbWZNJHq8/UtC3p0MlPoI/AAAAAAAAAOY/Cd0hsm4WyZE/s1600/Beautiful-nature-pictures-free-download-2014.jpg"}, ' +
    '{"name":"Sky","size":"78978","modified":"1476215261006","url":"http://www.photographyblogger.net/wp-content/uploads/2012/04/grant-ordelheide2.jpg"}, ' +
    '{"name":"Waterfall","size":"78978","modified":"1476225261006","url":"http://s017.radikal.ru/i409/1606/08/e2e0169e54ff.jpg"}, ' +
    '{"name":"Island","size":"78978","modified":"1476239261006","url":"http://s013.radikal.ru/i324/1606/0e/765e8786c329.jpg"}, ' +
    '{"name":"Pool","size":"78978","modified":"1476241261006","url":"http://gorillacool.com/wp-content/uploads/2014/08/Hamilton-Pool-Nature-Reserve.jpg"}, ' +
    '{"name":"Wood","size":"78978","modified":"1476245211006","url":"https://static1.squarespace.com/static/552d919de4b043156047a481/t/56bb96e9c6fc08bd71267d4f/1455134465586/kibale-nature-foundation.jpg"}, ' +
    '{"name":"river","size":"78978","modified":"1476242261006","url":"http://showme.co.za/durban/wp-content/blogs.dir/12/files/palmiet-nature-reserve/palmiet-nature-reserve-102.jpg"}, ' +
    '{"name":"Sunset","size":"78978","modified":"1476245171006","url":"https://ae01.alicdn.com/kf/HTB1Qs_HIVXXXXcjXFXXq6xXFXXXx/Custom-Sunrises-and-sunsets-Sky-Mono-California-font-b-Nature-b-font-Print-30x20-Inch-font.jpg"}, ' +
    '{"name":"Tree","size":"67679","modified":"1476245181006","url":"http://wallpaperswa.com/thumbnails/detail/20130624/green%20water%20sunset%20ocean%20clouds%20landscapes%20nature%20coast%20trees%20goa%20india_wallpaperswa.com_60.jpg"}]}';

  private photos:any;
  private totalSize:number = 0;

  getPhotos(): Observable<any>{
      return Observable.create(observer => {
        // setTimeout(() => {
          observer.next(JSON.parse(this.jsonPhotos).photos);
          observer.complete();
        // }, 5000);
      });
  }

  getTotalSize(): Observable<number>{
    return Observable.create(observer => {
      // setTimeout(() => {
        let size =  JSON.parse(this.jsonPhotos).photos;
        let total:number = 0;
        size.forEach(function(item) {
          total += (+item.size);
        });
      observer.next(Math.round(total/1000000));
      observer.complete();
      // }, 2000);
    });
  }

}
