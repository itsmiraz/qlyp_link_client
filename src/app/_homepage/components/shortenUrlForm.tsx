"use client";
import { CreateShortUrl } from "@/apiService/Services/ShortUrl";
import PrimaryButton from "@/components/ui/primaryButton";
import { useToast } from "@/components/ui/use-toast";
import { TCreateShortUrl } from "@/types/shortUrl";
import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { types } from "util";

type ShortenUrlFormProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setshortLink: React.Dispatch<React.SetStateAction<string>>;
};

const ShortenUrlForm = ({ setModal, setshortLink }: ShortenUrlFormProps) => {
  const [isLoading, setLoading] = useState(false);

  const [Link, setLink] = useState("");

  const { toast } = useToast();
  const handleSubmit = async () => {
    // console.log("clicked");
    if (!Link) {
      toast({
        title: "Please Add your long url first",
      });
      document.getElementById("link-form")?.focus();
    } else {
      try {
        setLoading(true);
        const payload: TCreateShortUrl = {
          longUrl: Link,
        };
        const result = await CreateShortUrl(payload);

        setLoading(false);
        if (result?.data?.success === true) {
          setshortLink(result?.data?.data?.shortUrl);
          setModal(true);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
  };

  return (
    <div className="bg-[#181E29] relative border border-gray-600  pr-2 mx-auto max-w-[500px] my-7 w-fit rounded-full">
      <input
        id="link-form"
        onChange={e => setLink(e.target.value)}
        className=" px-4 py-4 bg-[#181E29] focus:outline-none rounded-full"
        placeholder="Enter the link here"
      />
      <PrimaryButton disabled={isLoading} onClick={handleSubmit}>
        {isLoading ? "Loading" : "Shorten Now"}
      </PrimaryButton>
    </div>
  );
};

export default ShortenUrlForm;
