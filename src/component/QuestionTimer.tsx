import React, { useEffect, useState } from "react";

function QuestionTimer({
  timeout,
  onTimeout,
}: {
  timeout: number;
  onTimeout: () => void;
}) {
  const [remaining, setRemaining] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <progress id="question-time" max={timeout} value={remaining} />
    </div>
  );
}

export default QuestionTimer;
