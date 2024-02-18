'use client';

interface IWord {
  className?: string;
  text?: string;
}

interface Props {
  words: IWord[];
}

const TypeWriter = ({ words }: Props) => {
  return <div>TypeWriter</div>;
};

export default TypeWriter;
