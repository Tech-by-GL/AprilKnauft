# Giới thiệu

Đây là một app được dựng trên form của giao diện smartphone.

Xây dựng theo bố cục giống với các App tích điểm, mua hàng online bây giờ, App giúp người dùng dễ sử dụng và nhận thông báo từ nhà sản xuất.

## inside

Sử dụng: + React + CSS + Antd

Learn:

- Qua bài này em học được cách làm việc với Antd và Css cho Modal Antd.
- Có thêm được thời gian làm việc thực tế với React và các author trong React :
  - UseState: define

```js
import { useState } from "react";
```

- Import, Export
- Có thêm kinh nghiệm giải quyết bug.
- Có một vài vấn đề khi sử dụng Modal khi mới bắt đầu làm :

  - Css Modal:
    - bug: mức độ ưu tiên chưa được phù hợp.
    - solution:
    ```cs
    !important
    ```
  - Truy cập camera:

    - bug: chưa truy cập được

    ```js
    import Camera from "./Camera";

    <Camera />;
    ```

  - Chụp và tải xuống:

    - bug: chụp but chưa download
    - solution:

    ```js
    if (imageSrc) {
      setUrl(imageSrc);
      setImage(imageSrc);

      if (imageSrc.length > 0) {
        var a = document.createElement("a"); //Create <a>
        a.href = imageSrc; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
        console.log(imageSrc);
      }
    }
    ```
