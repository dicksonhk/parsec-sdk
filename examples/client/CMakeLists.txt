set(EXEC_NAME "${PROJECT_NAME}_example")

set(Header_Files
        "mtymap.h"
        "include/matoya.h"
)
source_group("Header Files" FILES "${Header_Files}")

set(Source_Files
        "main.c"
)
source_group("Source Files" FILES "${Source_Files}")

add_executable("${EXEC_NAME}" "${Header_Files}" "${Source_Files}")
target_include_directories(
        "${EXEC_NAME}"
        PUBLIC
        "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}>"
        "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
        "$<INSTALL_INTERFACE:include>"
)
set(_libs "parsec_sdk")
# TODO: Build all libs in CMake and add just the target name here
if (APPLE)
    list(APPEND _libs "${CMAKE_CURRENT_SOURCE_DIR}/lib/macos/libmatoya.a")
    list(APPEND _libs
            "-framework AudioToolbox"
            "-framework CoreGraphics"
            "-framework CoreServices"
            "-framework Metal"
            "-framework AppKit"
            )
    include(../../cmake/FindPkgMacros.cmake)
    include(../../cmake/FindCoreVideo.cmake)
    include(../../cmake/FindIOKit.cmake)
    include(../../cmake/FindOpenGLES2.cmake)
    list(APPEND _libs "${CoreVideo_LIBRARIES}" "${IOKit_LIBRARIES}" "${OPENGLES2_LIBRARY}")
elseif (CMAKE_SYSTEM_NAME STREQUAL "Windows")
    if (CMAKE_SYSTEM_PROCESSOR STREQUAL "x86_64")
        list(APPEND _libs "${CMAKE_CURRENT_SOURCE_DIR}/lib/windows/x86/matoya.lib")
    else ()
        list(APPEND _libs "${CMAKE_CURRENT_SOURCE_DIR}/lib/windows/x64/matoya.lib")
    endif ()
else ()
    list(APPEND _libs "${CMAKE_CURRENT_SOURCE_DIR}/lib/linux/libmatoya.a")
endif ()
target_link_libraries(
        "${EXEC_NAME}"
        PUBLIC
        "${_libs}"
)
set_target_properties(
        "${EXEC_NAME}"
        PROPERTIES
        LINKER_LANGUAGE
        C
)

# install rules
set(installable_libs "${EXEC_NAME}" "${PROJECT_NAME}_compiler_flags")
install(FILES "${Header_Files}" DESTINATION "include")

if (TARGET "${DEPENDANT_LIBRARY}")
    list(APPEND installable_libs "${DEPENDANT_LIBRARY}")
endif ()
install(TARGETS ${installable_libs}
        DESTINATION "bin"
        EXPORT "${EXEC_NAME}Targets")
