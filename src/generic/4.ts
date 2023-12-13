/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PageBook {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageBook> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
