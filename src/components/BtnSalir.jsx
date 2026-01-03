import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { useToast } from '@chakra-ui/react'
import { useToast, Box, Flex, Text } from "@chakra-ui/react";
import Temas from "./Temas";
import { useColorMode } from "@chakra-ui/react";

const BtnSalir = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  const fondo =
    colorMode === "light" ? "bg-white text-black" : "bg-gray-900 text-white";

  const handleLogout = () => {
    // 🗑️ Eliminar token del localStorage

    // alert("Sesión cerrada correctamente");
    toast({
      position: "top",
      duration: null, // ❌ sin límite de tiempo (hasta que el usuario decida)
      isClosable: false,
      render: ({ onClose }) => (
        <Box
          color="white"
          p={6}
          bg="gray.800"
          borderRadius="md"
          boxShadow="lg"
          textAlign="center"
        >
          <Text fontSize="lg" mb={4}>
            ¿Seguro que quieres salir?
          </Text>
          <Flex justify="center" gap={4}>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose();
                localStorage.removeItem("token");
                localStorage.removeItem("UsuarioID");
                localStorage.removeItem("ID");
                navigate("/");
                console.log("✅ Usuario confirmó salir");
                // aquí puedes poner navigate("/login") o tu lógica de logout
              }}
            >
              Sí, salir
            </Button>
            <Button colorScheme="green" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </Flex>
        </Box>
      ),
    });
    // 🔁 Redirigir al login
  };

  const handleInicio = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className={`flex justify-center w-full h-[76px] px-4 sm:px-10 2xl:px-15 rounded-md shadow-md ${fondo}`}
      >
        <div
          className={`flex justify-between items-center w-full max-w-screen-xl gap-6 py-4 ${fondo}`}
        >
          <div className="flex gap-3 items-center">
            <img
              className="w-[60px] h-auto"
              src="/img/logo_sinfondo.png"
              alt="logo"
            />
            <div>
              <h1 className="text-[16px] sm:text-[20px] font-bold text-black">
                Terrenos Cusco
              </h1>
              <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">
                Terrenos en el Corazón de los Andes
              </p>
            </div>
          </div>
          <div class="flex gap-3 h-15 text-center mx-5 items-center">
            <button
              onClick={handleInicio}
              class="!bg-[#FEF7F2] !text-[#0e0d0d] !p-1 rounded-sm cursor-pointer shadow-sm shadow-black"
            >
              Inicio
            </button>
            <Temas />
            <button
              onClick={handleLogout}
              class="!bg-[#FEF7F2] !text-[#0e0d0d] !p-1 rounded-sm cursor-pointer shadow-sm shadow-black"
            >
              <img
                class="w-5"
                src="/img/ArrowRightStartOnRectangle.svg"
                alt="salir"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnSalir;
