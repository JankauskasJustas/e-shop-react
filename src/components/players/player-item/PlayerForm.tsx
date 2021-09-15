import React, { useState } from "react";
import Repository from "../../../api/Repository";
import { Player } from "../../../types/Player";
import "./PlayerForm.css";
interface PlayerFormProps {
  player?: Player;
  onCloseFormClick: (refetch: boolean) => void;
}

const PlayerForm = (props: PlayerFormProps) => {
  const [formData, setFormData] = useState<Player>(
    props.player ?? getNewPlayerObj()
  );
  const mainImgRef = React.createRef<HTMLInputElement>();
  const jerseysRef = React.createRef<HTMLInputElement>();

  const onChooseMainImgClick = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const onChooseJerseysClick = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const onMainImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const img = await toBase64(e.target.files[0]);
      setFormData({ ...formData, img });
    }
  };

  const onJerseysChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const jerseys = await Promise.all(
        Array.from(e.target.files).map(async (file) => {
          return {
            title: file.name,
            img: await toBase64(file),
          };
        })
      );
      setFormData({ ...formData, jerseys });
    }
  };

  const onFormSubmit = async () => {
    if (formData.id) {
      await Repository.updatePlayer(formData, formData.id);
      props.onCloseFormClick(true);
    } else {
      await Repository.insertPlayer(formData);
      props.onCloseFormClick(true);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          props.onCloseFormClick(false);
        }}
        className="cancel-btn"
        type="button"
      >
        X
      </button>
      <form className="new-item-form">
        <label className="input-field">
          <span>
            {formData.img ? "Change main image" : "Upload main image"}
          </span>
          <input
            ref={mainImgRef}
            hidden
            type="file"
            name="image"
            id="image"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onMainImgChange(e)
            }
          />
          <button
            type="button"
            onClick={(e) => onChooseMainImgClick(mainImgRef)}
          >
            Choose file...
          </button>
        </label>
        <label className="input-field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Add player name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label className="input-field">
          <span>Surname</span>
          <input
            type="text"
            name="surname"
            placeholder="Add player surname"
            id="surname"
            value={formData.surname}
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
          />
        </label>
        <label className="input-field">
          <span>
            {formData.jerseys.length ? "Change jerseys" : "Upload jerseys"}
          </span>
          <input
            ref={jerseysRef}
            hidden
            type="file"
            name="jerseys"
            id="jerseys"
            multiple
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onJerseysChange(e)
            }
          />
          <button
            type="button"
            onClick={(e) => onChooseJerseysClick(jerseysRef)}
          >
            Choose files...
          </button>
        </label>
        <button
          onClick={() => onFormSubmit()}
          className="form__submit-btn"
          type="button"
        >
          {props.player ? "Update" : "Insert"}
        </button>
      </form>
    </>
  );
};

const getNewPlayerObj = (): Player => {
  return {
    name: "",
    surname: "",
    img: "",
    jerseys: [],
  };
};

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const finalBase64 = dropSignature(reader.result);
      resolve(finalBase64);
    };
    reader.onerror = (error) => reject(error);
  });

const dropSignature = (base64) => {
  const indexFrom = base64.indexOf("64,") + 3;
  return base64.substring(indexFrom);
};
export default PlayerForm;
