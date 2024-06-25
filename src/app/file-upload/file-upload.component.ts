import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  content: string = '';

  onFileUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file: File = (element.files as FileList)[0];

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
      this.content = reader.result as string;
    };
  }
}
