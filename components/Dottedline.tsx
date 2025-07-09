
import React from 'react';
export default function CustomDottedLine() {
  return (
    <div className="w-full h-0.5 
      [background-image:repeating-linear-gradient(to_right,_black_0_4px,_transparent_4px_12px)]
      [mask-image:linear-gradient(to_right,_transparent,_black_20%,_black_80%,_transparent)]
      mask-repeat-no-repeat mask-size-full"
    />
  );
}
