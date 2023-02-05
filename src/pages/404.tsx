import Template from 'components/common/Template';
import React, { FunctionComponent } from 'react';

const NotFoundPage: FunctionComponent = function () {
  return (
    <Template>
      <div className="py-8 flex flex-col justify-center items-center">
        <h2 className="text-8xl font-bold">404</h2>
        <p className="mt-8">찾을 수 없는 페이지입니다.</p>
      </div>
    </Template>
  );
};

export default NotFoundPage;
