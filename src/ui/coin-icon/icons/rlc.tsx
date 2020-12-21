import React from 'react';

interface RlcProps {
  color?: string;
  size?: string | number;
}

const Rlc = (props: RlcProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
      viewBox="0 0 33 32"
    >
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.683-19.114c-1.63.171-2.866 1.657-2.754 3.314 0 .457-.169.857-.562 1.086a1.12 1.12 0 01-.618.171c-.225 0-.394-.057-.619-.171-.506-.286-1.068-.457-1.63-.457h-.337c-1.63.171-2.81 1.657-2.699 3.314 0 .457-.168.857-.562 1.086a1.12 1.12 0 01-.618.171.939.939 0 01-.562-.171c-.506-.286-1.068-.458-1.63-.458h-.338c-1.517.172-2.642 1.486-2.698 3.086 0 1.714 1.35 3.143 3.036 3.143h.28c1.462-.171 2.643-1.314 2.755-2.8v-.514c0-.457.169-.857.562-1.086a1.12 1.12 0 01.619-.171c.225 0 .393.057.618.171.506.286 1.068.457 1.63.457h.337a3.08 3.08 0 002.699-2.8v-.514c0-.457.168-.857.562-1.086a1.12 1.12 0 01.618-.171c.225 0 .394.057.562.171.506.286 1.068.457 1.63.457h.338C25.82 18.83 27 17.572 27 15.972c0-1.715-1.35-3.143-3.036-3.143-.112 0-.224 0-.28.057zM17.22 8.943c-1.63.171-2.867 1.657-2.755 3.314 0 .457-.168.857-.562 1.086a1.12 1.12 0 01-.618.171.939.939 0 01-.562-.171c-.506-.286-1.068-.457-1.63-.457h-.338c-1.517.228-2.642 1.486-2.642 3.028 0 1.715 1.35 3.143 3.036 3.143h.281c1.462-.172 2.642-1.315 2.754-2.8v-.514c0-.457.17-.857.563-1.086a1.12 1.12 0 01.618-.171.94.94 0 01.562.171c.506.286 1.068.457 1.63.457h.337c1.518-.171 2.643-1.485 2.699-3.085 0-1.715-1.35-3.143-3.036-3.143-.168 0-.225 0-.337.057zM11.036 5C9.359 5 8 6.382 8 8.086s1.36 3.085 3.036 3.085S14.07 9.79 14.07 8.086 12.711 5 11.036 5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Rlc;