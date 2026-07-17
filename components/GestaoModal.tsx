import FotoModal from "./FotoModal";
import type { Gestao } from "@/data/gestoes";

export default function GestaoModal({
  gestao,
  onClose,
}: {
  gestao: Gestao;
  onClose: () => void;
}) {
  if (!gestao.imagem) return null;

  return (
    <FotoModal
      src={gestao.imagem}
      alt={`Foto da Gestão ${gestao.ano}`}
      onClose={onClose}
    />
  );
}
