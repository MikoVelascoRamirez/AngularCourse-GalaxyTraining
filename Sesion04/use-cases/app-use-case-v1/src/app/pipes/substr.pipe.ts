import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value: string, size: number): string {
    let textLengthLimit = "";

    let textTransformed = "";

    if(!value) return "";

    if(value.length>size){

      textLengthLimit = value.substring(0,size);
      const lastWhitespaceIndex = textLengthLimit.lastIndexOf(' ');
      textTransformed = textLengthLimit.substring(0,lastWhitespaceIndex);
      return textTransformed.concat(" ...");
    }else{
      return value;
    }
  }

}
