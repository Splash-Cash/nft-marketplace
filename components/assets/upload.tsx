import React from 'react';

interface UploadProps {
  className: string;
}

const Upload: React.FC<UploadProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 91 83"
  >
    <path
      fill="#686464"
      d="M86.076 36.047c-2.743-2.788-6.27-4.525-10.092-4.99.025-.586.05-1.149.05-1.736C76.008 13.157 62.853 0 46.663 0c-14.33 0-26.529 10.344-28.93 24.284C7.693 25.702 0 34.384 0 44.654c0 11.348 9.235 20.567 20.6 20.567.245 0 .515 0 .809-.024.245 0 .465.024.686.024h12.002c.956 0 1.715-.758 1.715-1.712 0-.953-.76-1.711-1.715-1.711H22.095c-.196 0-.392 0-.588-.025h-.147c-.294.025-.539.025-.76.025-9.48 0-17.17-7.704-17.17-17.143 0-8.95 6.98-16.459 15.921-17.094l1.396-.098.172-1.394C22.536 13.157 33.608 3.424 46.663 3.424c14.306 0 25.941 11.616 25.941 25.897 0 1.028-.073 2.08-.196 3.106l-.22 1.883 1.886.025c3.625.073 7.005 1.516 9.553 4.108a13.627 13.627 0 013.944 9.635c0 7.581-6.173 13.744-13.767 13.744-.318 0-.661-.024-1.004-.049h-.245c-.318.025-.588.049-.857.049H59.426c-.956 0-1.715.758-1.715 1.712s.76 1.712 1.715 1.712h12.272c.294 0 .637-.025.98-.05.392.025.759.05 1.126.05 9.48 0 17.196-7.704 17.196-17.168 0-4.548-1.74-8.803-4.924-12.032z"
    ></path>
    <path
      fill="#686464"
      d="M58.764 44.239L45.488 30.984 32.21 44.24a1.725 1.725 0 000 2.421c.662.66 1.764.66 2.425 0l9.137-9.122v43.726c0 .954.76 1.712 1.715 1.712.955 0 1.715-.758 1.715-1.712V37.563l9.136 9.121c.343.343.784.49 1.225.49.44 0 .882-.172 1.225-.49a1.733 1.733 0 00-.025-2.445z"
    ></path>
  </svg>
);

export default Upload;
