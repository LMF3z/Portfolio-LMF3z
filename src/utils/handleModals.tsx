import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import ModalViewImagesProducts from '../Components/ModalViewImagesProducts';

const handleModals = () => {
  const ContainerModal = lazy(() => import('../Components/ContainerModal'));

  const modalDiv = document.createElement("div")
  modalDiv.id = "modal"

  document.body.appendChild(modalDiv)

  const root = createRoot(modalDiv as HTMLElement);

  root.render(
    <Suspense
      fallback={<div className="w-full h-screen fixed top-0 bg-[rgba(0,0,0,0.4)]"></div>}
    >
      <ContainerModal>
        <ModalViewImagesProducts />
      </ContainerModal>
    </Suspense>
  );
};

export default handleModals;
