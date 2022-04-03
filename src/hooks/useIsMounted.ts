import React, { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [mounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => setIsMounted(false);
  });

  return mounted;
};
